const app = Vue.createApp({
  data() {
    return {
      name: "Alpy",
      age: 39,
      ageInFiveYears: 44,
      imageUrl:
        "https://centrendl.org/Posts_Images/sustained-victory-CentreNDL-Leadership-blog-Nigeria-Abuja-November-2020.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    favoriteNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
