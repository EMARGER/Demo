package com.atul.demo.converter.entity;

import java.io.File;

import org.springframework.stereotype.Component;

import com.atul.demo.entity.Project;
import com.atul.demo.model.request.ProjectAddRequestModel;

@Component
public class ProjectModelToEntity {
	
	private String extractFileNameOnly(String fullPath) {
	    return new File(fullPath).getName();
	}

	public Project add(ProjectAddRequestModel projectAddRequestModel) {
		Project project = new Project();
		project.setImg(extractFileNameOnly(projectAddRequestModel.getImg()));
		project.setName(projectAddRequestModel.getName());
		project.setDescription(projectAddRequestModel.getDescription());
		return project;
	}
}
