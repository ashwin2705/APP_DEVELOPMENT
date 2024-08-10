package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class InvoiceDetails {

    private String CustomerId;
    private String CustomerName;
    private String CustomerAddress;
    private String BoatName;
    private String BoatReg;
    private String Location;
    private int DepositTotal;
    private int InvoiceTotal;
    public String getCustomerId() {
        return CustomerId;
    }
    public void setCustomerId(String customerId) {
        CustomerId = customerId;
    }
    public String getCustomerName() {
        return CustomerName;
    }
    public void setCustomerName(String customerName) {
        CustomerName = customerName;
    }
    public String getCustomerAddress() {
        return CustomerAddress;
    }
    public void setCustomerAddress(String customerAddress) {
        CustomerAddress = customerAddress;
    }
    public String getBoatName() {
        return BoatName;
    }
    public void setBoatName(String boatName) {
        BoatName = boatName;
    }
    public String getBoatReg() {
        return BoatReg;
    }
    public void setBoatReg(String boatReg) {
        BoatReg = boatReg;
    }
    public String getLocation() {
        return Location;
    }
    public void setLocation(String location) {
        Location = location;
    }
    public int getDepositTotal() {
        return DepositTotal;
    }
    public void setDepositTotal(int depositTotal) {
        DepositTotal = depositTotal;
    }
    public int getInvoiceTotal() {
        return InvoiceTotal;
    }
    public void setInvoiceTotal(int invoiceTotal) {
        InvoiceTotal = invoiceTotal;
    }







    
}
