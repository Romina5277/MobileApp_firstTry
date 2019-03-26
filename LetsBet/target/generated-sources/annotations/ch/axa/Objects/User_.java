package ch.axa.Objects;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(User.class)
public abstract class User_ {

	public static volatile SingularAttribute<User, Date> birthday;
	public static volatile SingularAttribute<User, String> firstname;
	public static volatile SingularAttribute<User, String> mail;
	public static volatile ListAttribute<User, Bet> involvements;
	public static volatile SingularAttribute<User, Integer> id;
	public static volatile ListAttribute<User, Bet> bets;
	public static volatile ListAttribute<User, User> friends;
	public static volatile SingularAttribute<User, String> username;
	public static volatile SingularAttribute<User, String> lastname;

}

