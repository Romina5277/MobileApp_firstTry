package ch.axa.Objects;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

public class Bet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bet_ID")
    private int id;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_IDFS")
    private User typist;

    private Date end;
    private String input;
    private String detail;
    private String lastchange;
    private String place;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "involvement",
            joinColumns = {@JoinColumn(name = "bet_IDFS",
                    referencedColumnName = "bet_ID")},
            inverseJoinColumns = {@JoinColumn(name = "user_IDFS",
                    referencedColumnName = "user_ID")})
    private List<User> involvements;

    public Bet() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getTypist() {
        return typist;
    }

    public void setTypist(User typist) {
        this.typist = typist;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getLastchange() {
        return lastchange;
    }

    public void setLastchange(String lastchange) {
        this.lastchange = lastchange;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public List<User> getInvolvements() {
        return involvements;
    }

    public void setInvolvements(List<User> involvements) {
        this.involvements = involvements;
    }
}
