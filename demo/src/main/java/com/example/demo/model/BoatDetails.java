package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class BoatDetails {

    @Id
   private String BoatingRef;
   private String BoatName;
   private Date ServiceDates;
   private Date PurchasedDate;
   private String BoatHouseLocation;
   private Date RegistationDate;
   private String PreviousOnwer;
   private String CurrentOwner;
   private int DailyHireCost;
   
public String getBoatingRef() {
    return BoatingRef;
}
public void setBoatingRef(String boatingRef) {
    BoatingRef = boatingRef;
}
public String getBoatName() {
    return BoatName;
}
public void setBoatName(String boatName) {
    BoatName = boatName;
}
public Date getServiceDates() {
    return ServiceDates;
}
public void setServiceDates(Date serviceDates) {
    ServiceDates = serviceDates;
}
public Date getPurchasedDate() {
    return PurchasedDate;
}
public void setPurchasedDate(Date purchasedDate) {
    PurchasedDate = purchasedDate;
}
public String getBoatHouseLocation() {
    return BoatHouseLocation;
}
public void setBoatHouseLocation(String boatHouseLocation) {
    BoatHouseLocation = boatHouseLocation;
}
public Date getRegistationDate() {
    return RegistationDate;
}
public void setRegistationDate(Date registationDate) {
    RegistationDate = registationDate;
}
public String getPreviousOnwer() {
    return PreviousOnwer;
}
public void setPreviousOnwer(String previousOnwer) {
    PreviousOnwer = previousOnwer;
}
public String getCurrentOwner() {
    return CurrentOwner;
}
public void setCurrentOwner(String currentOwner) {
    CurrentOwner = currentOwner;
}
public int getDailyHireCost() {
    return DailyHireCost;
}
public void setDailyHireCost(int dailyHireCost) {
    DailyHireCost = dailyHireCost;
}




   
    

}
