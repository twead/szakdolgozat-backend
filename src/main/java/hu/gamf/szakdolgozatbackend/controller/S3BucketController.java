package hu.gamf.szakdolgozatbackend.controller;

import hu.gamf.szakdolgozatbackend.service.AmazonS3BucketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping("/api/profile")
@RestController
public class S3BucketController {

    private AmazonS3BucketService amazonS3BucketService;

    S3BucketController(AmazonS3BucketService amazonS3BucketService) {
        this.amazonS3BucketService = amazonS3BucketService;
    }

    @PostMapping("/uploadFile/{username}")
    public ResponseEntity<?> uploadFileMine(@PathVariable(value = "username") String username, @RequestPart(value = "file") MultipartFile file) {
        try {
            String response = this.amazonS3BucketService.uploadFile(username, file);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/deleteFile/{username}")
    public ResponseEntity<?> deleteFile(@PathVariable(value = "username") String username, @RequestBody String fileURL) {
        try {
            this.amazonS3BucketService.deleteFileFromBucket(username, fileURL);
            return new ResponseEntity<>(null, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }
}