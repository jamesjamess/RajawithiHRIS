<template>
  <div>
    <v-container fluid>
      <v-row no-gutters class="justify-center">
        <v-col>
          <v-btn color="info" block tile>
            <span>ข้อมูลประวัติ</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>การดำรงตำแหน่ง</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>การรับเงินเดือน</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>การศึกษา</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>เครื่องราชฯ</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>โทษทางวินัย</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>การอบรม/ดูงาน</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>ที่อยู่</span>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn color="info" block tile>
            <span>ตำแหน่งที่ได้รับมอบหมาย</span>
          </v-btn>
        </v-col>
      </v-row>

      <v-container class="elevation-5 pink lighten-5">
        <v-row>
          <v-col cols="3">
            <v-text-field name="nameField" label="ชื่อ" id="nameField"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field name="lastnameField" label="นามสกุล" id="lastnameField"></v-text-field>
          </v-col>

          <v-col cols="2">
            <v-text-field name="statusField" label="สถานะ" id="statusField"></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field name="idField" label="เลขที่บัตรประชาชน" id="idField"></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field name="positionField" label="ตำแหน่ง" id="position"></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field name="positionIdField" label="เลขที่ตำแหน่ง" id="positionIdField"></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              name="employmentTypeField"
              label="ประเภทการจ้่าง"
              id="employmentTypeField"
            ></v-text-field>
          </v-col>

          <v-col class="ml-10" cols="2">
            <v-btn class="info">ค้นหา</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="elevation-5 mt-5" fluid>
        <!-- <v-container fluid> -->
        <!-- <v-container class="blue"> -->
        <v-row>
          <v-card height="150" max-width="150" color="red" >
            <v-col>
              <v-img :src="imgUrl" alt="mr.kasemsan" contain />
            </v-col>
          </v-card>

          <v-col cols="3">
            <v-text-field label="เลขที่ตำแหน่ง" outlined></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field label="ตำแหน่ง" outlined></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field label="ตำแหน่ง" outlined></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field label="ตำแหน่ง" outlined></v-text-field>
          </v-col>
        </v-row>

        <!-- </v-container> -->

        <!-- <v-container class="red">
            
        </v-container>-->
        <!-- </v-container> -->
      </v-container>
    </v-container>

    <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar prominent extended>
      

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  </div>

  


</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/121151182.jpeg")
    };
  }
};
</script>

<style>
</style>