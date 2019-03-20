package ch.axa.Objects;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Bet.class)
public abstract class Bet_ {

	public static volatile SingularAttribute<Bet, User> typist;
	public static volatile SingularAttribute<Bet, String> input;
	public static volatile ListAttribute<Bet, User> involvements;
	public static volatile SingularAttribute<Bet, Date> end;
	public static volatile SingularAttribute<Bet, Integer> id;
	public static volatile SingularAttribute<Bet, String> detail;
	public static volatile SingularAttribute<Bet, String> place;
	public static volatile SingularAttribute<Bet, String> title;
	public static volatile SingularAttribute<Bet, String> lastchange;

}

