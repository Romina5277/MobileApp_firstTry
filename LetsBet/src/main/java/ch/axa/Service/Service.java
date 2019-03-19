package ch.axa.Service;


import ch.axa.DAO.DAO;
import ch.axa.Objects.Bet;
import ch.axa.Objects.User;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;

@Stateless
@Path("/letsBet")
public class Service {

    @EJB
    private DAO dao;

    /*
     * User
     */

    @GET
    @Path("/users")
    @Produces({"application/json"})
    public List<User> getUsers() {
        return dao.getUsers();
    }

    @GET
    @Path("/user/{id}")
    @Produces({"application/json"})
    public Response getUser(@PathParam("id") int id) {
        Optional<User> user = dao.getUser(id);

        if(user.isPresent()) {
            User u = user.get();
            return Response.status(200)
                    .entity(u)
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    /*
     * Bet
     */

    @GET
    @Path("/bets")
    @Produces({"application/json"})
    public List<Bet> getBets() {
        return dao.getBets();
    }

    @GET
    @Path("/bet/{id}")
    @Produces({"application/json"})
    public Response getBet(@PathParam("id") int id) {
        Optional<Bet> bet = dao.getBet(id);

        if(bet.isPresent()) {
            Bet b = bet.get();
            return Response.status(200)
                    .entity(b)
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

}
