<template>


  <div>
    <div align="left">
      <button v-on:click="toMainPage()" class="btn btn-light btn-sm m-1">Pealeheküljele
      </button>
      <button v-on:click="toParentView()" class="btn btn-light btn-sm m-1">Vanema leheküljele
      </button>
      <button v-on:click="toUpdateContact()" class="btn btn-light btn-sm m-1" style="alignment: right">Uuenda kontaktandmed
      </button>
      <br>
      <br>
    </div>

    <div>
      <img
          src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg"
          alt="">
    </div>
    <br>

    <div v-if="mainDiv">
      <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="groupStud-tab" data-toggle="tab" href="#groupStud" role="tab"
             aria-controls="groupStud" aria-selected="true">Sinu gruppi õpilased</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="regStud-tab" data-toggle="tab" href="#regStud" role="tab" aria-controls="regStud"
             aria-selected="false">Registreeritud õpilased</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#addExpense" role="tab"
             aria-controls="addExpense"
             aria-selected="false">Kulude lisamine</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="allExpenses-tab" data-toggle="tab" href="#allExpenses" role="tab"
             aria-controls="allExpenses"
             aria-selected="false">Kõik gruppi kulud</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="groupStud" role="tabpanel" aria-labelledby="groupStud-tab">
          <br>
          <h5 class="card-title">Sinu gruppi õpilased</h5>
          <p class="card-text">Vali õpilased keda tahad gruppist eemaldada</p>
          <p class="card-text">Lisa raha õpilase bilanssile</p>
          <p class="card-text">Vaata õpilase vanemate kontaktandmed</p>


          <div align="center">
            <div v-if="addMoneyDiv" class="card text-white bg-secondary mb-3" style="max-width: 18rem">
              <div class="card-header">Raha lisamine{{ ' ' }}
                {{ this.studentFirstName }}{{ ' ' }}{{ this.studentLastName }}{{ ' ' }} bilanssi
              </div>
              <div class="card-body">
                <h5 class="card-title">Sisesta raha kogus</h5>
                <input type="number" v-model="amount" name="" id="amount">
                <br>
                <br>
                <button v-on:click="addMoneyToStudent()" class="btn btn-light">Lisa raha</button>
                <br>
                <br>
                <button v-on:click="addMoneyDiv = false" class="btn btn-light">Pane aken kinni</button>
                <br>
              </div>
            </div>
          </div>

          <div align="center">
            <div v-if="contactDiv" class="card text-white bg-secondary mb-3" style="max-width: 18rem">
              <div class="card-header">{{ this.studentFirstName }}{{ ' ' }}{{ this.studentLastName }}{{ ' ' }}vanemate
                andmed
              </div>
              <div class="card-body">

                <h7 class="card-title">
                  {{ 'Eesnimi: ' }}{{ this.firstName }}
                  <br>
                  {{ 'Perekonnanimi: ' }}{{ this.lastName }}
                  <br>
                  {{ 'E-mail: ' }}{{ this.email }}
                  <br>
                  {{ 'Tel: ' }}{{ this.tel }}
                  <br>
                  {{ 'Pangakonto nr: ' }}{{ this.accountNumber }}
                  <br>
                </h7>
                <br>
                <button v-on:click="contactDiv = false" class="btn btn-light">Pane aken kinni</button>
                <br>
              </div>
            </div>
          </div>

          <table class="table table-hover" style="width: fit-content" align="center">
            <thead>
            <tr>
              <th scope="col">Eesnimi</th>
              <th scope="col">Perekonnanimi</th>
              <th scope="col">Bilanss</th>
              <th scope="col">Raha lisamine</th>
              <th scope="col">Vanemate kontaktandmed</th>
              <th scope="col">Eemalda gruppist</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in groupStudents">
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>{{ student.studentBalanceAmount }}</td>
              <td>
                <button v-on:click="toAddMoneyDiv(student)" class="btn btn-secondary">Lisa raha</button>

              </td>
              <td>
                <button v-on:click="toContactDiv(student)" class="btn btn-secondary">Kontaktandmed</button>
              </td>
              <td>
                <input type="checkbox" name="" id="groupStudents" v-model="student.selected">
                <br>

              </td>
            </tr>


            {{groupStudents}}

            </tbody>
          </table>
          <button v-on:click="removeStudentsFromGroup()" class="btn btn-warning" style="alignment: center">Eemalda
            gruppist
          </button>
          <br>
          <br>
        </div>


        <div class="tab-pane fade" id="regStud" role="tabpanel" aria-labelledby="regStud-tab">
          <br>
          <h5 class="card-title">Õpilased, kes on registreeritud Teie gruppi</h5>
          <p class="card-text">Valige õpilasi keda tahate lisada oma gruppi</p>
          <div align="center">
            <div v-if="contactDiv" class="card text-white bg-secondary mb-3" style="max-width: 18rem">
              <div class="card-header">{{ this.studentFirstName }}{{ ' ' }}{{ this.studentLastName }}{{ ' ' }}vanemate
                andmed
              </div>
              <div class="card-body">

                <h7 class="card-title">
                  {{ 'Eesnimi: ' }}{{ this.firstName }}
                  <br>
                  {{ 'Perekonnanimi: ' }}{{ this.lastName }}
                  <br>
                  {{ 'E-mail: ' }}{{ this.email }}
                  <br>
                  {{ 'Tel: ' }}{{ this.tel }}
                  <br>
                  {{ 'Pangakonto nr: ' }}{{ this.accountNumber }}
                  <br>
                </h7>
                <br>
                <button v-on:click="contactDiv = false" class="btn btn-light">Pane aken kinni</button>
                <br>
              </div>
            </div>
          </div>
          <br>
          <table class="table table-hover" style="width: fit-content" align="center">
            <thead>
            <tr>
              <th scope="col">Eesnimi</th>
              <th scope="col">Perekonnanimi</th>
              <th scope="col">Vanemate kontaktandmed</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in registeredStudents">
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>
                <button v-on:click="toContactDiv(student)" class="btn btn-secondary">Kontaktandmed</button>
              </td>
              <td>
                <input type="checkbox" name="" v-model="student.selected">
                <br>
              </td>
            </tr>

            </tbody>
          </table>
          <button v-on:click="registerStudents()" class="btn btn-success" style="alignment: center">Registreeri õpilasi
          </button>
          <br>
          <br>
        </div>

        <div class="tab-pane fade" id="addExpense" role="tabpanel" aria-labelledby="addExpense-tab" align="center">
          <br>
          <h5 class="card-title">Uue kulu lisamine</h5>
          <p class="card-text">Lisa kõik kuludega seotud info siia</p>


          <div class="input-group mb-3" style="width: 400px">
            <div class="input-group-prepend">
              <span class="input-group-text">Kulu nimi</span>
            </div>
            <input type="text" v-model="expenseRequest.name" class="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group mb-3" style="width: 400px">
            <div class="input-group-prepend">
              <span class="input-group-text" style="size: 500px">Selgitus</span>
            </div>
            <textarea class="form-control" v-model="expenseRequest.description" id="exampleFormControlTextarea1"
                      rows="2"></textarea>
          </div>
          <div class="input-group mb-3" style="width: 400px">
            <div class="input-group-prepend">
              <span class="input-group-text">Summa</span>
            </div>
            <div>
              <input type="number" v-model="expenseRequest.amount" style="width: 319px" class="form-control"
                     aria-label="Sizing example input"
                     aria-describedby="inputGroup-sizing-default">
            </div>

            <div>
              <br>
              <div class="input-group" style="width: 400px">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" @change="handleImage" accept="image/x-png, image/jpeg"
                         id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                  <label class="custom-file-label" for="inputGroupFile04">{{ pictureMessage }}</label>
                </div>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" v-on:click="addNewReceiptPicture">Lisa pilt
                  </button>
                </div>
              </div>
            </div>

            <!--            <div>-->
            <!--              <br>-->
            <!--            <input type="file"  @change="handleImage" accept="image/x-png, image/jpeg">-->
            <!--            <button v-on:click="addNewReceiptPicture"  type="button" class="btn btn-light btn-sm">Lisa pilt</button>-->
            <!--            </div>-->

          </div>

          <div>

            <div>
              <br>
              <div align="center">
                <h5> Vali õpilasi kes osalevad</h5>
              </div>
              <br>
              <table class="table table-hover" style="width: auto" align="center">
                <thead>
                <tr>
                  <th scope="col">Eesnimi</th>
                  <th scope="col">Perekonnanimi</th>
                  <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="student in groupStudents">
                  <td>{{ student.firstName }}</td>
                  <td>{{ student.lastName }}</td>
                  <td>
                    <input type="checkbox" name="" v-model="expenseRequest.students" v-bind:value="student">
                  </td>
                </tr>
                <br>
                </tbody>
              </table>

              <button v-on:click="addNewExpense()" class="btn btn-secondary">Lisa kulu</button>
              <br>
              <br>
            </div>
          </div>
        </div>


        <div class="tab-pane fade" id="allExpenses" role="tabpanel"
             aria-labelledby="allExpenses-tab">
          <br>
          <div v-if="groupExpenseLogDiv">
            <h5 class="card-title">Kõik Teie gruppiga seotud kulud</h5>
            <br>
            <table class="table table-hover" style="width:auto" align="center">
              <thead>
              <tr>
                <th scope="col">Kulu nimi</th>
                <th scope="col">Selgitus</th>
                <th scope="col">Summa</th>
                <th scope="col">Kuupäev</th>
                <th scope="col">Vaata pilti</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="expence in expenses">
                <td>{{ expence.name }}</td>
                <td>{{ expence.description }}</td>
                <td>{{ expence.amount }}</td>
                <td>{{ expence.dateAndTime }}</td>
                <td>
                  <button v-on:click="getReceiptPictures(expence.expenseId)" type="button" class="btn btn-light btn-sm">
                    Vaata pilti
                  </button>
                </td>
              </tr>
              <br>
              </tbody>
            </table>
          </div>

          <div v-if="expencePictureDiv">
            <button v-on:click="toExpenseLogDiv()" class="btn btn-secondary ">Tagasi</button>
            <br>
            <br>
            <div v-for="picture in pictures">
              <label>{{ picture.title }}</label>
              <img :src="picture.data" style="max-width: 600px">
              <br>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="updateContactDiv" align="center">


        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Eesnimi</span>
          </div>
          <input type="text" v-model="contactRequest.firstName" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Perekonnanimi</span>
          </div>
          <input type="text" v-model="contactRequest.lastName" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">E-mail</span>
          </div>
          <input type="text" v-model="contactRequest.email" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Telefoninumber</span>
          </div>
          <input type="text" v-model="contactRequest.tel" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>

        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Pangakontonumber</span>
          </div>
          <input type="text" v-model="contactRequest.accountNumber" class="form-control"
                 aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <button v-on:click="updateContactInfo()" class="btn btn-secondary m-3">Uuenda kontaktandmed</button>
        <button v-on:click="toMainView()" class="btn btn-secondary">Tagasi</button>

      <br>
      <br>
    </div>

  </div>


</template>


<script>


export default {

  name: "Moderator",


  data: function () {

    return {
      mainDiv: true,
      addMoneyDiv: false,
      expencePictureDiv: false,
      groupExpenseLogDiv: true,
      contactDiv: false,
      updateContactDiv: false,
      groupStudents: {},
      pictureMessage: 'Vali pilt',
      studentFirstName: sessionStorage.getItem('studentFirstName'),
      studentLastName: '',
      studentInfo: {},
      registeredStudents: {},
      groupId: sessionStorage.getItem('groupId'),
      userId: sessionStorage.getItem('userId'),
      studentId: sessionStorage.getItem('studentId'),
      yourGroups: {},
      studentsToRemove: {},
      expenses: {},
      amount: null,
      registeredStudentList: [],
      studentList: [],
      groupListDiv: true,
      accountNumber: '',
      email: '',
      firstName: '',
      lastName: '',
      tel: '',
      pictureExport: {},
      picId: 0,
      pictures: {},
      contactRequest: {
        id: sessionStorage.getItem('userId'),
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        accountNumber: ''
      },
      expenseRequest: {
        groupId: sessionStorage.getItem('groupId'),
        pictureId: null,
        name: '',
        description: '',
        amount: null,
        students: []
      }
    }
  },

  methods: {

    toMainPage: function () {
      this.$router.push({name: 'userViewRoute'})
    },

    toMainView: function () {
      this.updateContactDiv = false
      this.mainDiv = true
      this.contactRequest ={}
    },

    toAddMoneyDiv: function (student) {
      this.addMoneyDiv = true
      this.studentFirstName = student.firstName
      this.studentLastName = student.lastName
      sessionStorage.setItem('studentId', student.studentId)
    },

    toExpensePictureDiv: function () {
      this.groupExpenseLogDiv = false
      this.expencePictureDiv = true
    },

    toExpenseLogDiv: function () {
      this.groupExpenseLogDiv = true
      this.expencePictureDiv = false
    },

    toUpdateContact: function () {
      this.mainDiv = false
      this.updateContactDiv = true
      this.getUserContactByUserId()

    },

    toContactDiv: function (student) {
      this.contactDiv = true
      this.studentFirstName = student.firstName
      this.studentLastName = student.lastName
      sessionStorage.setItem('studentId', student.studentId)
      this.getUserContactByStudentId()
    },

    toParentView: function () {
      this.$router.push({name: 'parentRoute'})
    },

    getGroupStudents: function () {
      this.$http.get("/moderator/all-students", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {
        this.groupStudents = response.data
      }).catch(error => {
        console.log(error)
      })
    },


    getRegisteredStudents: function () {
      this.$http.get("/moderator/all-registered-students", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {
        this.registeredStudents = response.data
      }).catch(error => {
        console.log(error)
      })
    },


    addMoneyToStudent: function () {
      this.$http.put("/moderator/money-deposit", null, {
            params: {
              studentId: sessionStorage.getItem('studentId'),
              amount: this.amount
            }
          }
      ).then(response => {
        sessionStorage.removeItem('studentId')
        this.getGroupStudents()
        this.addMoneyDiv = false
        this.amount = null
      }).catch(error => {
        console.log(error)
      })
    },


    addNewExpense: function () {
      this.$http.post("/moderator/new-expense", this.expenseRequest
      ).then(response => {
        this.expenseRequest = {}
        this.getGroupExpenses()
      }).catch(error => {
        console.log(error)
      })
    },

    registerStudents: async function () {
      await this.$http.post("/moderator/students-activation", this.registeredStudents,
      ).then(response => {
        this.getRegisteredStudents()
        this.getGroupStudents()
      }).catch(error => {
        console.log(error)
      })
    },

    removeStudentsFromGroup: async function () {
      await this.$http.post("/moderator/students-deactivation", this.groupStudents,
      ).then(response => {
        this.getGroupStudents()
        this.getRegisteredStudents()
      }).catch(error => {
        console.log(error)
      })
    },


    getUserContactByStudentId: function () {
      this.$http.get("/moderator/user-contact-by-student-id", {
            params: {
              studentId: sessionStorage.getItem('studentId'),
            }
          }
      ).then(response => {
        this.firstName = response.data.firstName
        this.lastName = response.data.lastName
        this.accountNumber = response.data.accountNumber
        this.email = response.data.email
        this.tel = response.data.tel
        sessionStorage.removeItem('studentId')
        this.getGroupStudents()
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    getUserContactByUserId: function () {
      this.$http.get("/moderator/user-contact-info", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.contactRequest.firstName = response.data.firstName
        this.contactRequest.lastName = response.data.lastName
        this.contactRequest.accountNumber = response.data.accountNumber
        this.contactRequest.email = response.data.email
        this.contactRequest.tel = response.data.tel
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    updateContactInfo: function () {
      this.$http.put("/moderator/update-contact-info", this.contactRequest
      ).then(response => {
        alert("Kontaktandmed on uuendatud")
        this.updateContactDiv = false
        this.mainDiv = true
      }).catch(error => {
        console.log(error)
      })
    },


    getGroupExpenses: function () {
      this.$http.get("/expense/expenses-by-group-id", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {
        this.expenses = response.data
      }).catch(error => {
        console.log(error)
      })
    },


    handleImage(event) {

      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },

    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureExport.data = reader.result;
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },


    addNewReceiptPicture: function () {
      this.$http.post("/receipt-picture/in", this.pictureExport
      ).then(response => {
        this.expenseRequest.pictureId = response.data
        this.pictureMessage = 'Pilt lisatud'
      }).catch(error => {
        console.log(error)
      })
    },
    getReceiptPictures: function (expenseId) {
      this.$http.get("/receipt-picture/all", {
            params: {
              expenseId: expenseId
            }
          }
      ).then(response => {
        this.toExpensePictureDiv()
        this.pictures = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }


  },
  mounted() {
    this.getGroupStudents()
    this.getRegisteredStudents()
    this.getGroupExpenses()
  }
}


</script>

<style scoped>

</style>