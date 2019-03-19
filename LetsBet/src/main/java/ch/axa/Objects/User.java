package ch.axa.Objects;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_ID")
    private int id;

    private String username;
    private String firstname;
    private String lastname;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    private String mail;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "friends",
                joinColumns = {@JoinColumn(name = "user_IDFS",
                                            referencedColumnName = "user_ID")},
                inverseJoinColumns = {@JoinColumn(name = "friend_IDFS",
                                                    referencedColumnName = "user_ID")})
    private List<User> friends;

    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "involvements")
    private List<Bet> involvements;

    @OneToMany(mappedBy = "typist")
    private List<Bet> bets;

    public User() {
        bets = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public List<User> getFriends() {
        return friends;
    }

    public void setFriends(List<User> friends) {
        this.friends = friends;
    }

    public List<Bet> getInvolvements() {
        return involvements;
    }

    public void setInvolvements(List<Bet> involvements) {
        this.involvements = involvements;
    }

    public List<Bet> getBets() {
        return bets;
    }

    public void setBets(List<Bet> bets) {
        this.bets = bets;
    }
}
