<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <div class="container mx-auto mt-5">
      <!-- dark mode toggle -->
      <button @click="toggleDarkMode" class="btn btn-primary mb-3">
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>

      <!-- text -->
      <div class="text-box mb-3">
        Campaign Performance Dashboard
      </div>

      <!-- dropdown menu box -->
      <VacancyDropdown :campaigns="campaigns" v-model:selectedVacancy="selectedVacancy" @change="displayData" />

      <!-- campaign data box -->
      <CampaignDetails :campaign="selectedCampaign" @reset="resetSelection" v-if="selectedCampaign" />
      <!-- image at the bottom -->
      <div class="image-container">
        <img src="/wonderkind_cover.jfif" alt="Bottom Image" />
      </div>
    </div>
  </div>
</template>

<!--  script of the page -->
<script setup lang="ts">
import VacancyDropdown from './components/VacancyDropdown.vue';
import CampaignDetails from './components/CampaignDetails.vue';
import { useCampaignData } from './composables/useCampaignData';

// destructure the properties from the useCampaignData composable
const {
  campaigns,
  selectedVacancy,
  selectedCampaign,
  isDarkMode,
  displayData,
  resetSelection,
  toggleDarkMode
} = useCampaignData();
</script>

<!--  styles of the page -->
<style>
/* for the logos */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* for the display session */
.selected-campaign-container {
  position: relative;
  padding-top: 4rem; /* Ensure the button does not overlap the content */
}

/* for Campaign Performance Dashboard */
.text-box {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  background-color: #FBF3D5;
  border: 1px solid #EFBC9B;
  padding: 1rem; 
}

/* Dark mode styles */
/*  for the background of the page */
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

/* for the card background*/
.dark-mode .card {
  border-color: #333333;
  background-color: #2c2c2c;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
}

/*  for the dropdown menu */
.dark-mode .form-select {
  background-color: #333333;
  color: #ffffff;
  border-color: #555555;
}

/*  for the card title */
.dark-mode .card-title{
  color: #ffffff;
}
/*  for the card text */
.dark-mode .card-text {
  color: #dddddd;
}

/* for the Campaign Performance Dashboard */
.dark-mode .text-box {
  background-color: #333333;
  color: #ffffff;
  border-color: #555555;
}


/* for the image at the bottom */
.image-container {
  margin-top: 2rem;
}
.image-container img {
  max-width: 100%;
  height: auto; /* auto ensures the image does not stretch out of sight */
}

/* for the hover effect */
.transition-transform {
  transition: transform 0.3s;
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>