package org.example.issuetracker.service;

import java.util.List;

import org.example.issuetracker.model.Issue;

public interface IssueService {

	List<Issue> findAll();
}
