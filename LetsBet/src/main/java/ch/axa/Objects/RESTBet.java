package ch.axa.Objects;

import java.util.Date;

public class RESTBet {
    private int id;
    private String title;
    private RESTUser typist;
    private Date end;
    private String input;
    private String detail;
    private String lastchange;
    private String place;

    public RESTBet() {
    }

    public RESTBet(int id, String title, RESTUser typist, Date end, String input, String detail, String lastchange, String place) {
        this.id = id;
        this.title = title;
        this.typist = typist;
        this.end = end;
        this.input = input;
        this.detail = detail;
        this.lastchange = lastchange;
        this.place = place;
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

    public RESTUser getTypist() {
        return typist;
    }

    public void setTypist(RESTUser typist) {
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
}
