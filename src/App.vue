<template>
  <div class="header">
    <div class="title is-1 has-text-centered mt-5">Juliaus Palavinsko CV</div>
    <div class="subtitle is-3 has-text-centered">Garso režisierius</div>
    <div class="subtitle is-5 has-text-right mr-5 py-3">+37061234567<br>juliuspalavinskas@gmail.com</div>
  </div>

  <div class="card" style="width: 250px; margin: auto; margin-bottom: 1.5rem;" >
    <div class="card-image">
      <figure class="image" style="margin: auto">
        <img 
          :src="imageSRC"
          :id="imageID"
          alt="Juliaus portretas"
        >
      </figure>
      <div class="card-content" style="padding: 0; text-align: center; margin-top: 1rem;">
        <button 
          @click="changeIMG()"
          class="button is-info"
        >
          Pakeisti nuotrauką
        </button>
      </div>
    </div>
    
  </div>
  
  <p>
    <!-- <button onclick="changeImage()">Pakeisti nuotrauką</button> -->
  </p>
  
    
    
  <div class="card">
    <div class="title is-3">Kalbos</div>
    <div class="content">
      <ul>
        <li>Lietuvių-gimtoji</li>
        <li>Anglų - C1</li>
        <li>Prancūzų - pradmenys</li>
      </ul>
    </div>
  </div>
    

    
  <div class="card">
    <div class="title is-3 ml-1">Kompiuterinių programų įgūdžiai</div>
    <table class="table is-bordered is-striped">
      <thead>
          <tr>
            <th></th>
            <th>Programa</th>
            <th>Lygis</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/protools.png"
                alt="Avid Pro Tools logo"
              >
           </figure>
          </td>
          <td>Avid Pro Tools</td>
          <td>Puikiai</td>
        </tr>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/wavesaudio.png"
                alt="Waves Audio logo"
              >
           </figure>
          </td>
          <td>Waves Audio</td>
          <td>Puikiai</td>
        </tr>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/logicpro.png"
                alt="Logic Pro logo"
              >
           </figure>
          </td>
          <td>Logic Pro</td>
          <td>Pažengęs</td>
        </tr>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/abletonlive.png"
                alt="Ableton Live logo"
              >
           </figure>
          </td>
          <td>Ableton Live</td>
          <td>Pažengęs</td>
        </tr>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/davinciresolve.png"
                alt="Davinci Resolve logo"
              >
           </figure>
          </td>
          <td>Davinci Resolve</td>
          <td>Pažengęs</td>
        </tr>
        <tr>
          <td>
            <figure class="image is-24x24">
              <img 
                src="/adobepremier.png"
                alt="Adobe Premier logo"
              >
           </figure>
          </td>
          <td>Adobe Premier	</td>
          <td>Pradmenys</td>
        </tr>
      </tbody>
    </table>
  </div>    
    

  <div class="card" style="grid-column:1 / -1">
      <div class="title is-3">Išsilavinimas</div>
      <div class="content">
        <div class="card" style="margin-left: 0rem; margin-right: 0rem;">
         <div class="subtitle is-5">
            Garso režisūros bakalauras - 2019-2022 - BRITISH AND IRISH MODERN MUSIC INSTITUTE
          </div>
          <div class="content">
            <ul>
              <li>Garso įrašymas profesionalioje studijoje</li>
              <li>Garso suvedimas skaitmenine ir analogine įranga</li>
              <li>Muzikos prodiusavimas</li>
              <li>Akustikos, psichoakustikos pradmenys</li>
            </ul>
          </div> 
        </div>
        
        <div class="card" style="margin-left: 0rem; margin-right: 0rem;">
          <div class="subtitle is-5">
            Multimedija ir kompiuterinis dizainas (ištęstinės studijos) - 2023-2029 - VILNIUS TECH
          </div>
        </div>
        
        <div class="card" style="margin-left: 0rem; margin-right: 0rem;">
          <div class="subtitle is-5">
            Vidurinis išsilavinimas - 2014-2018 - VILNIAUS SIMONO DAUKANTO GIMNAZIJA
          </div> 
        </div>
      </div>
    </div>
  


  <!-- darbo patirtis -->

    <div class="card">
      <div class="title is-3">Darbo patirtis</div>
      <form
        @submit.prevent="addJob"
      >
        <div class="field is-grouped mb-5">
          <div class="control is-expanded">
            <input 
            v-model="newJobPareigos"
            class="input" 
            type="text" 
            placeholder="Pareigos"
            >
          </div>
          <div class="control is-expanded">
            <input 
            v-model="newJobDarboviete"
            class="input" 
            type="text" 
            placeholder="Darbovietė"
            >
          </div>
          <div class="control is-expanded">
            <input 
            v-model="newJobMetai"
            class="input"
            type="text" 
            placeholder="Metai"
            >
          </div>
          <p class="control">
            <button 
            :disabled="!newJobPareigos||!newJobDarboviete||!newJobMetai"
            class="button is-info"
            style="width: 80px;"
            >
              Pridėti
            </button>
          </p>
        </div>
      </form>

      <table class="table is-fullwidth is-bordered is-hoverable">

        <thead>
          <tr>
            <th>Pareigos</th>
            <th>Darbovietė</th>
            <th>Metai</th>
          </tr>
        </thead>

          <tbody
          v-for="job in jobs">
            <tr>
              <td>{{job.pareigos }}</td>
              <td>{{job.darboviete}}</td>
              <td>{{job.metai}}</td>
              <td class="ml-2" style="/* width: 80px; */ text-align: center;">
                <button 
                @click="deleteJob(job.id)"
                class="button is-danger"
                >&cross;</button>
              </td>
            </tr>
          </tbody>

      </table>
      
    </div>
</template>


<script setup>

  const imageSRC = ref('/julius1.JPG')
  const imageID = ref('1')

  function changeIMG() {
    if (imageID.value=='1'){
      imageSRC.value = '/julius2.jpg' 
      imageID.value = '2'
    }
    else {
      imageSRC.value = '/julius1.JPG'
      imageID.value = '1'
    }
  }

  /*imports*/
  import { ref, onMounted, createBlock } from 'vue'
  import { collection,onSnapshot, 
    addDoc, doc, deleteDoc, updateDoc, 
    query, orderBy
  } from 'firebase/firestore'
  import { db } from '@/firebase'

  /*firebase refs*/
  const jobsCollectionRef = collection(db, "jobs")
  const jobsCollectionQuery = query(jobsCollectionRef, orderBy("date", "desc"));

  const jobs = ref([
  /* {
    id: 'id1',
    pareigos: 'Garso režisierius',
    darboviete: 'LRT',
    metai: '2021-'
  } */
  ])

  onMounted(() =>{
    onSnapshot(jobsCollectionQuery, (querySnapshot) => {
      const fbJobs = [];
      querySnapshot.forEach((doc) => {
        const job = {
        id: doc.id,
        pareigos: doc.data().pareigos,
        darboviete: doc.data().darboviete,
        metai: doc.data().metai
      }
      fbJobs.push(job)
      })
      jobs.value = fbJobs
    });
  })


  const newJobPareigos = ref('')
  const newJobDarboviete = ref('')
  const newJobMetai = ref('')

  const addJob = () => {
    addDoc(jobsCollectionRef, {
      pareigos: newJobPareigos.value,
      darboviete: newJobDarboviete.value,
      metai: newJobMetai.value,
      date: Date.now()
    });
    newJobPareigos.value = ''
    newJobDarboviete.value = ''
    newJobMetai.value = ''
  }

  const deleteJob = id => {
    deleteDoc(doc(jobsCollectionRef, id));
  }

</script>

<style>
  @import 'bulma/css/bulma.min.css';
  .card{margin-left: 1rem; margin-right: 1rem ;background:var(--card); border:1px solid rgba(255,255,255,.06); border-radius:16px; padding:24px; box-shadow:0 10px 22px rgba(0,0,0,.35)}
</style>