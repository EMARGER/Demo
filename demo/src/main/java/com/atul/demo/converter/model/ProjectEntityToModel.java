package com.atul.demo.converter.model;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.atul.demo.entity.Project;
import com.atul.demo.model.response.ProjectResponseModal;

@Component
public class ProjectEntityToModel {
	private String extractFileNameOnly(String fullPath) {
	    return new File(fullPath).getName();
	}
	public ProjectResponseModal byId(Project project) {
		ProjectResponseModal projectResponseModal = new ProjectResponseModal();
		projectResponseModal.setId(project.getId());
		projectResponseModal.setImg(extractFileNameOnly(project.getImg()));
		projectResponseModal.setName(project.getName());
		projectResponseModal.setDescription(project.getDescription());
		return projectResponseModal;
	}
	
	public List<ProjectResponseModal> all(List<Project> projects){
		List<ProjectResponseModal> projectResponseModals = new ArrayList<>();
		for (Project project : projects) {
			ProjectResponseModal projectResponseModal = new ProjectResponseModal();
			projectResponseModal.setId(project.getId());
			projectResponseModal.setImg(extractFileNameOnly(project.getImg()));
			projectResponseModal.setName(project.getName());
			projectResponseModal.setDescription(project.getDescription());
			projectResponseModals.add(projectResponseModal);
		}
		return projectResponseModals;
	}
	
}
