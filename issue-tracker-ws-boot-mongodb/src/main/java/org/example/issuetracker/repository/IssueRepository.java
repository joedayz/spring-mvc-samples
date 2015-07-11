package org.example.issuetracker.repository;

import org.example.issuetracker.model.Issue;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends
        PagingAndSortingRepository<Issue, String> {

}
