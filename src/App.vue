<template>
<div class="container">
  <div class="row">
     <h1>CargoFive Ports</h1>
     <input type='text'
     class='form-control bg-dark text-light rounded-0 border-0 my-4'
     placeholder="Search Ports"
     @keyup="filterPorts()"
     v-model="textSearch"
     >
 <table class='table table-dark'>
   <thead>
     <tr>
       <th v-for='title in titles' :key='title'>
         {{title}}
       </th>
     </tr>
   </thead>
   <tbody>
     <tr v-for='port in displayedPorts' :key='port.id'>
       <td>
        <span class='text-muted'>{{port.id}}</span>
        </td>
      <td>
        <span>{{port.name}}</span>
       
      </td>
      <td>
        <span>{{port.continent}}</span>
        </td>
        <td>
          <span>{{port.country}}</span>
        </td>
        <td>
           <span>{{port.coordinates}}</span>
        </td>
     </tr>
   </tbody>
 </table>


<div class="alert alert-dark d-flex align-items-center" role="alert" v-if='err != ""'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
     {{this.err}}
  </div>
</div>
  
 <div class="btn-group col-md-2 offset-md-5">
   <button 
   type='button'
   v-if='page != 1 && pages !=0'
   @click="page--"
   class='btn btn-sm btn-outline-secondary'>
     Prev
   </button>
   <button
   type='button' 
   v-for='pageNumber in pages'
   :key='pageNumber'
   @click="page = pageNumber"
   class='btn btn-sm btn-outline-secondary'>
   {{pageNumber}}
   </button>
   <button 
   type='button'
   v-if='page < pages && pages !=0'
   @click="page++"
   class='btn btn-sm btn-outline-secondary'>
     Next
   </button>
 </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      ports: [],
      filteredPorts: [],
      page: 1,
      perPage: 12,
      pages: [],
      titles: [
        '#',
        'Name',
        'Continent',
        'Country',
        'Coordinates',
      ],
      textSearch: '',
      err: "",
    }
  },
  async mounted() {
   const res = await axios.get('http://localhost:8081/ports')
   this.ports = res.data.data
   this.filteredPorts = res.data.data
  },
  methods: {
  paginate(ports){
    let page = this.page;
    let perPage = this.perPage;
    let from = (page * perPage) - perPage
    let to = (page * perPage);
    return ports.slice(from, to)
  },
  setPorts(){
    this.filteredPorts = this.ports
    this.pages = Math.ceil(this.filteredPorts.length/this.perPage)
  },
  filterPorts(){
    this.filteredPorts = this.ports
    this.filteredPorts = this.ports.filter((port) =>
  port.name.toLowerCase().includes(this.textSearch.toLowerCase())||
  port.country.toLowerCase().includes(this.textSearch.toLowerCase())||
  port.continent.toLowerCase().includes(this.textSearch.toLowerCase()))
  console.log(this.filteredPorts.length)
  console.log(this.filteredPorts)
  if(this.filteredPorts.length === 0){
    this.err = 'There are no matching ports'
    this.pages = 0
  }
  else {
     this.err = ""
     this.pages = Math.ceil(this.filteredPorts.length / this.perPage)
    this.page = 1
  }
  }
  },
  computed: {
    displayedPorts() {
       this.filteredPorts = this.paginate(this.ports.filter((port) =>
       port.name.toLowerCase().includes(this.textSearch.toLowerCase())||
       port.country.toLowerCase().includes(this.textSearch.toLowerCase())||
       port.continent.toLowerCase().includes(this.textSearch.toLowerCase())))
       return this.filteredPorts
    }
  },
  watch: {
    ports() {
      this.setPorts()
    }
  }
};
</script>