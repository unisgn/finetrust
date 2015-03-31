package com.finetrust.web;

import com.finetrust.domain.entity.Project;
import com.finetrust.repository.ProjectRepo;
import com.finetrust.service.ProjectMgr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
@RestController
@RequestMapping(value = "/rest/Project")
public class ProjectCtrl {
    @Autowired
    private ProjectRepo repo;

    @Autowired
    private ProjectMgr mgr;

    @RequestMapping(method = RequestMethod.GET)
    public List<Project> getAll() {
        return repo.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public long save(@RequestBody Project project) {
        return mgr.save(project);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void update(@RequestBody Project project) {
        mgr.update(project);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Project get(@PathVariable("id") long id) {
        return repo.get(id);
    }

}
