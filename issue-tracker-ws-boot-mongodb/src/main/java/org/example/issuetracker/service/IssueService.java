package org.example.issuetracker.service;

import org.example.issuetracker.model.Issue;

public interface IssueService {

    /**
     * Search the issue data repository for all Issue entities.
     * @return An Iterable collection of Issue entities or null if none found.
     */
    Iterable<Issue> findAll();

    /**
     * Search the issue data repository for a single Issue entity by the primary
     * key identifier.
     * @param id An issue primary key identifier.
     * @return An Issue entity or null if not found.
     */
    Issue find(String id);

    /**
     * Create a new Issue entity in the data repository.
     * @param issue An issue entity to persist.
     * @return The persisted issue entity.
     */
    Issue create(Issue issue);

    /**
     * Update an Issue entity in the data repository.
     * @param issue An issue entity to update.
     * @return The updated issue entity.
     */
    Issue update(Issue issue);

    /**
     * Delete an Issue entity from the data repository.
     * @param id The primary key identifier of the issue to delete.
     */
    void delete(String id);

}
