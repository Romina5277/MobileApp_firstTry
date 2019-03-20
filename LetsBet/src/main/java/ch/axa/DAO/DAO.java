package ch.axa.DAO;

import ch.axa.Objects.Bet;
import ch.axa.Objects.User;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Singleton
public class DAO {

    @PersistenceContext
    private EntityManager em;

    /*
     * User
     *
     * @Methods:
     *      getUser
     *          Parameter:  id
     *          Return:     Optional<User>
     *      getUsers
     *          Parameter:  -
     *          Return:     List<User>
     *
     */

    public Optional<User> getUser(int id){
        return this.getUsers().stream()
                .filter(u -> u.getId() == id)
                .findFirst();
    }

    public List<User> getUsers(){
        TypedQuery<User> tq = em.createQuery("SELECT u FROM User u", User.class);
        List<User> list = tq.getResultList();

        return list;
    }

    /*
     * Bet
     *
     * @Methods:
     *      getBet
     *          Parameter:  id
     *          Return:     Optional<Bet>
     *      getBets
     *          Parameter:  -
     *          Return:     List<Bet>
     *      changeBet
     *          Parameter:  id
     *          Return:     Optional<Bet>
     *      createBet
     *          Parameter:  id
     *          Return:     Optional<Bet>
     *      deleteBets
     *          Parameter:  id
     *          Return:     Optional<Bet>
     *
     */

    public Optional<Bet> getBet(int id){
        return this.getBets().stream()
                .filter(u -> u.getId() == id)
                .findFirst();
    }

    public List<Bet> getBets(){
        TypedQuery<Bet> tq = em.createQuery("SELECT b FROM Bet b", Bet.class);
        List<Bet> list = tq.getResultList();

        return list;
    }

    public Optional<Bet> changeBet(int id, Bet bet) {
        List<Bet> betList = this.getBets();
        Optional<Bet> changingBet = betList.stream()
                .filter(u -> u.getId() == id)
                .findFirst();

        if(changingBet.isPresent()){
            bet.setId(id);
        } else {
            Optional<Bet> userWithHighestId = betList.stream()
                    .max( (u1, u2) -> u1.getId() - u2.getId());
            bet.setId(userWithHighestId.get().getId() + 1);
            changingBet = Optional.of(bet);
        }
        em.merge(bet);

        return changingBet;
    }

    public Optional<Bet> createBet(Bet bet) {
        List<Bet> betList = this.getBets();

        if (betList.size() > 0) {
            Optional<Bet> personWithHighestId = betList.stream()
                    .max( (b1, b2) -> b1.getId() - b2.getId());

            bet.setId(personWithHighestId.get().getId()+1);
        } else {
            bet.setId(1);
        }

        em.merge(bet);
        return Optional.of(bet);
    }

    public Optional<Bet> deleteBet(int id) {
        List<Bet> betList = this.getBets();

        Optional<Bet> bet = betList.stream()
                .filter(b -> b.getId() == id)
                .findFirst();

        if (bet.isPresent()) {
            em.remove(bet.get());
        }

        return bet;
    }

}
