package ch.axa.Service;


import ch.axa.DAO.DAO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Path;

@Stateless
@Path("/letsBet")
public class Service {

    @EJB
    private DAO dao;



}
