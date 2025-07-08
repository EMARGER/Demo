package com.atul.demo.converter.entity;

import java.io.File;

import org.springframework.stereotype.Component;

import com.atul.demo.entity.Client;
import com.atul.demo.model.request.ClientAddRequestModel;
import com.atul.demo.model.request.ProjectAddRequestModel;

@Component
public class ClientModelToEntity {
	
	private String extractFileNameOnly(String fullPath) {
	    return new File(fullPath).getName();
	}

	public Client add(ClientAddRequestModel clientAddRequestModel) {
		Client client = new Client();
		client.setImg(extractFileNameOnly(clientAddRequestModel.getImg()));
		client.setName(clientAddRequestModel.getName());
		client.setDescription(clientAddRequestModel.getDescription());
		client.setDesignation(clientAddRequestModel.getDesignation());
		return client;
	}
}
