package hu.gamf.szakdolgozatbackend.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import hu.gamf.szakdolgozatbackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class AmazonS3BucketService {

    @Autowired
    private UserService userService;
    private AmazonS3 amazonS3;

    @Value("${endpointUrl}")
    private String endpointUrl;
    @Value("${bucketName}")
    private String bucketName;
    @Value("${accessKey}")
    private String accessKey;
    @Value("${secretKey}")
    private String secretKey;

    @PostConstruct
    private void initializeAmazon() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        this.amazonS3 = new AmazonS3Client(credentials);
    }

    public String uploadFile(String username, MultipartFile multipartFile) {
        String fileURL = "";
        try {
            User user = userService.findUserByUsername(username).get();
            File file = convertMultipartFileToFile(multipartFile);
            if(!multipartFile.getContentType().contains("image")) {
                throw new Exception("Képet tölts fel!");
            }
            String fileName = username + "/" + multipartFile.getOriginalFilename();
            fileURL = endpointUrl + "/" + bucketName + "/" + username + "/" + fileName;

            uploadFileToBucket(fileName, file);
            user.getPatient().setPicture(multipartFile.getOriginalFilename());
            userService.saveUser(user);
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileURL;
    }

    private File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convertedFile);
        fos.write(file.getBytes());
        fos.close();
        return convertedFile;
    }

    private void uploadFileToBucket(String fileName, File file) {
        amazonS3.putObject(new PutObjectRequest(bucketName, fileName, file)
                .withCannedAcl(CannedAccessControlList.PublicRead));
    }

    public void deleteFileFromBucket(String username, String fileName) throws AmazonServiceException, SdkClientException {
        String filePath = username+"/"+fileName;
        amazonS3.deleteObject(new DeleteObjectRequest(bucketName, filePath));
        User user = userService.findUserByUsername(username).get();
        user.getPatient().setPicture(null);
        userService.saveUser(user);
    }

}
