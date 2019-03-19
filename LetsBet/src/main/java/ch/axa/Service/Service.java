package ch.axa.Service;


import ch.axa.DAO.DAO;
import ch.axa.Objects.Bet;
import ch.axa.Objects.RESTBet;
import ch.axa.Objects.RESTUser;
import ch.axa.Objects.User;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
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

    public User restUserToUser(RESTUser restUser) {
        User user = new User();
        Optional<User> originalUser = dao.getUser(restUser.getId());

        user.setId(restUser.getId());
        user.setUsername(restUser.getUsername());
        user.setFirstname(restUser.getFirstname());
        user.setLastname(restUser.getLastname());
        user.setBirthday(restUser.getBirthday());
        user.setMail(restUser.getMail());

        if (originalUser.isPresent()) {
            user.setFriends(originalUser.get().getFriends());
            user.setInvolvements(originalUser.get().getInvolvements());
            user.setBets(originalUser.get().getBets());
        } else {
            user.setFriends(new ArrayList<>());
            user.setInvolvements(new ArrayList<>());
            user.setBets(new ArrayList<>());
        }

        return user;
    }

    public RESTUser userToRESTUser(Optional<User> user) {
        if (user.isPresent()) {
            return new RESTUser(user.get().getId(), user.get().getUsername(), user.get().getFirstname(),
                                    user.get().getLastname(), user.get().getBirthday(), user.get().getMail());
        } else {
            return null;
        }
    }

    @GET
    @Path("/users")
    @Produces({"application/json"})
    public List<RESTUser> getUsers() {
        List<User> userList = dao.getUsers();
        List<RESTUser> restUserList = new ArrayList<>();

        for (User user : userList) {
            restUserList.add(userToRESTUser(Optional.ofNullable(user)));
        }

        return restUserList;
    }

    @GET
    @Path("/user/{id}")
    @Produces({"application/json"})
    public Response getUser(@PathParam("id") int id) {
        Optional<User> user = dao.getUser(id);

        if(user.isPresent()) {
            return Response.status(200)
                    .entity(userToRESTUser(user))
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    /*
     * Bet
     */

    public Bet restBetToBet(RESTBet restBet) {
        Bet bet = new Bet();
        Optional<Bet> originalBet = dao.getBet(restBet.getId());

        bet.setId(restBet.getId());
        bet.setTitle(restBet.getTitle());
        bet.setTypist(restUserToUser(restBet.getTypist()));
        bet.setEnd(restBet.getEnd());
        bet.setInput(restBet.getInput());
        bet.setDetail(restBet.getDetail());
        bet.setLastchange(restBet.getLastchange());
        bet.setPlace(restBet.getPlace());

        if (originalBet.isPresent()) {
            bet.setInvolvements(originalBet.get().getInvolvements());
        } else {
            bet.setInvolvements(new ArrayList<>());
        }

        return bet;
    }

    public RESTBet betToRESTBet(Optional<Bet> bet) {
        if (bet.isPresent()) {
            return new RESTBet(bet.get().getId(), bet.get().getTitle(), userToRESTUser(Optional.ofNullable(bet.get().getTypist())),
                                bet.get().getEnd(),  bet.get().getInput(), bet.get().getDetail(), bet.get().getLastchange(),
                                bet.get().getPlace());
        } else {
            return null;
        }


    }

    @GET
    @Path("/bets")
    @Produces({"application/json"})
    public List<RESTBet> getBets() {
        List<Bet> betList = dao.getBets();
        List<RESTBet> restBetList = new ArrayList<>();

        for (Bet bet : betList) {
            restBetList.add(betToRESTBet(Optional.ofNullable(bet)));
        }

        return restBetList;
    }

    @GET
    @Path("/bet/{id}")
    @Produces({"application/json"})
    public Response getBet(@PathParam("id") int id) {
        Optional<Bet> bet = dao.getBet(id);

        if(bet.isPresent()) {
            return Response.status(200)
                    .entity(betToRESTBet(Optional.of(bet.get())))
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    @PUT
    @Path("/bet/{id}")
    @Produces({"application/json"})
    public Response changeBet(@PathParam("id") int id, RESTBet restBet) {
        Optional<Bet> changedBet = dao.changeBet(id, restBetToBet(restBet));

        if(changedBet.isPresent()){
            return Response.status(201)
                    .entity(betToRESTBet(Optional.of(changedBet.get())))
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

    @POST
    @Path("/bet")
    @Produces({"application/json"})
    public Response createBet(RESTBet restBet) {
        Optional<Bet> addedBet = dao.createPerson(restBetToBet(restBet));

        if(addedBet.isPresent()){
            return Response.status(201)
                    .entity(betToRESTBet(Optional.of(addedBet.get())))
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
        List<Bet> betList = dao.getBets();
        List<RESTBet> restBetList = new ArrayList<>();

        for (Bet bet : betList) {
            restBetList.add(betToRESTBet(Optional.ofNullable(bet)));
        }


        if(deletedBet.isPresent()){
            return Response.status(201)
                    .entity(restBetList)
                    .build();
        } else {
            return Response.status(404)
                    .build();
        }
    }

}
