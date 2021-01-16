<template>
  <div id="demo6">
      <h1>Form Input and V-Model</h1>
      <form v-on:submit.prevent="submit">
        <!-- Firstname -->
        <div>
          <label for="first_name">Firstname</label>
          <input type="text" name="first_name" v-model.trim="applicant.first_name">
        </div>
        <!-- Lastname -->
        <div>
          <label for="last_name">Lastname</label>
          <input type="text" name="last_name" v-model.trim="applicant.last_name">
        </div>
        <!-- Age -->
        <div>
          <label for="age">Age</label>
          <input type="number" v-model.number="applicant.age">
        </div>
        <!-- Sex -->
        <div>
          <label for="sex">Male</label>
          <input type="radio" name="sex" value="male" v-model="applicant.sex">

          <label for="sex">Female</label>
          <input type="radio" name="sex" value="female" v-model="applicant.sex">
        </div>
        <!-- Courses -->
        <div>
          <select name="courses" v-model="applicant.course">
            <option value="react">React</option>
            <option value="angular">angular</option>
            <option value="vuejs">Vue</option>
          </select>
        </div>

        <button type="button" @click.exact="clear" @click.shift="useDefault">Clear</button>
        <button type="submit">Submit</button>
      </form>

      <div style="margin-top: 16px; color:red;">#Spy {{JSON.stringify(applicant)}}</div>
  </div>
</template>

<script>
export default {
    name: "Demo6",
    data() {
      return {
        applicant: {
          first_name: "",
          last_name: "",
          sex: "male",
          course: "react",
          age: 0,
        }
      };
    },
    methods: {
      submit(){
        // event.preventDefault();
        alert(JSON.stringify(this.applicant))
      },
      clear(){
        this.applicant = {
          first_name: "",
          last_name: "",
          sex: "male",
          course: "react",
          age: 0,
        }
      },
      useDefault(){
        this.applicant = {
          first_name: "UNKNOWN",
          last_name: "UNKNOWN",
          sex: "male",
          course: "react",
          age: 10,
        }
      }
    },

}
</script>

<style>

</style>