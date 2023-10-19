struct Compain {
    String id;
    Address creator;
    String filed;
    String title;
    String description;
    Date startDate;
    Date endDate;
    int period;
    int amount;
    int reaisedAmount;
    Address[] donnors;
    String imageUrl;
    String dataUrl;
    String status;
    Bool valid;
}
struct actor {
    String id;
    Address wallet;
    String imageUrl;
    String password;
    String role;
}
struct donation{
    String id;
    Address donnor;
    Address association;
    int amount;
    String compain;

}