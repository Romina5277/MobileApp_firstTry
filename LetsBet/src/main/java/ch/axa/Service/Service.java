package ch.axa.Service;


import ch.axa.DAO.DAO;
import ch.axa.Objects.Bet;
import ch.axa.Objects.User;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;

@Stateless
@Path("/letsBet")
public class Service {

    @EJB
    private DAO dao;

    // Für den Test der Verbindung Frontend / Backend
    @GET
    @Path("/m")
    @Produces({"application/json"})
    public String getMessage() {
        return "{ \"message\": \"Hallo! Ich bin Romina!\" }";
    }

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
            return Response.status(200)
                    .entity(user.get())
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
            return Response.status(200)
                    .entity(bet.get())
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    @PUT
    @Path("/bet/{id}")
    @Produces({"application/json"})
    public Response changeBet(@PathParam("id") int id, Bet bet) {
        Optional<Bet> changedBet = dao.changeBet(id, bet);

        if(changedBet.isPresent()){
            return Response.status(201)
                    .entity(changedBet.get())
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    @POST
    @Path("/bet")
    @Produces({"application/json"})
    public Response createBet(Bet bet) {
        Optional<Bet> addedBet = dao.createPerson(bet);

        if(addedBet.isPresent()){
            return Response.status(201)
                    .entity(addedBet.get())
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    @DELETE
    @Path("/bet/{id}")
    @Produces({"application/json"})
    public Response deleteBet(@PathParam("id") int id) {
        Optional<Bet> deletedBet = dao.deletePerson(id);

        if(deletedBet.isPresent()){
            return Response.status(201)
                    .entity(dao.getBets())
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

}
