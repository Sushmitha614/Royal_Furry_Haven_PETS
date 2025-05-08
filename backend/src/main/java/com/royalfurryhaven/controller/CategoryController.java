package com.royalfurryhaven.controller;

import com.royalfurryhaven.model.Category;
import com.royalfurryhaven.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    private final String uploadDir = "uploads/category-icons/";

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestParam("name") String name,
                                            @RequestParam("description") String description,
                                            @RequestParam(value = "icon", required = false) MultipartFile icon) {
        try {
            String iconUrl = null;
            if (icon != null && !icon.isEmpty()) {
                String fileName = StringUtils.cleanPath(icon.getOriginalFilename());
                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }
                Path filePath = uploadPath.resolve(fileName);
                icon.transferTo(filePath.toFile());
                iconUrl = "/uploads/category-icons/" + fileName;
            }

            Category category = new Category(name, description, iconUrl);
            Category savedCategory = categoryRepository.save(category);
            return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to save icon file", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create category", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id,
                                            @RequestParam("name") String name,
                                            @RequestParam("description") String description,
                                            @RequestParam(value = "icon", required = false) MultipartFile icon) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (!optionalCategory.isPresent()) {
            return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
        }
        try {
            Category category = optionalCategory.get();
            category.setName(name);
            category.setDescription(description);

            if (icon != null && !icon.isEmpty()) {
                String fileName = StringUtils.cleanPath(icon.getOriginalFilename());
                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }
                Path filePath = uploadPath.resolve(fileName);
                icon.transferTo(filePath.toFile());
                category.setIconUrl("/uploads/category-icons/" + fileName);
            }

            Category updatedCategory = categoryRepository.save(category);
            return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to save icon file", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update category", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (!optionalCategory.isPresent()) {
            return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
        }
        try {
            categoryRepository.deleteById(id);
            return new ResponseEntity<>("Category deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete category", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
