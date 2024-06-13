<template>
  <div class=" selected-campaign-container">
    <!-- on click of the return button, emit the reset event to the parent component -->
    <button @click="$emit('reset')" class="btn return-button">Return</button>
    
    <!-- display campaign vacancy and location using the selectedCampaign prop -->
    <h2>{{ campaign.vacancy }} - {{ campaign.location }}</h2>
    
    <!-- iterate over each platform in the campaign and display its details -->
    <div v-for="platform in campaign.platforms" :key="platform.name" class="card mb-3 shadow-sm transition-transform hover:scale-105">
      <div class="card-body">
        <h3 class="card-title">
          <!-- display platform icon and name -->
          <i :class="getPlatformIcon(platform.name)"></i>
          {{ platform.name }}
        </h3>
        <hr />
        
        <!-- display platform metrics -->
        <p class="card-text"><strong>Impressions:</strong> {{ platform.metrics.impressions }}</p>
        <p class="card-text"><strong>Clicks:</strong> {{ platform.metrics.clicks }}</p>
        <p class="card-text"><strong>Applications:</strong> {{ platform.metrics.applications }}</p>
        <hr />
        <p class="card-text"><strong>Cost per Impression:</strong> ${{ platform.metrics.costPerImpression }}</p>
        <p class="card-text"><strong>Cost per Click:</strong> ${{ platform.metrics.costPerClick }}</p>
        <p class="card-text"><strong>Cost per Application:</strong> ${{ platform.metrics.costPerApplication }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';


// define the structure of Metrics, Platform, and Campaign nestedly
// structure of Metrics
interface Metrics {
  impressions: number;
  clicks: number;
  applications: number;
  costPerImpression: number;
  costPerClick: number;
  costPerApplication: number;
}

// structure of Platform
interface Platform {
  name: string;
  metrics: Metrics;
}

// structure of Campaign
interface Campaign {
  vacancy: string;
  location: string;
  platforms: Platform[];
}

// define a campaign prop to accept the selectedCampaign from the parent component
const props = defineProps<{
  campaign: Campaign;
}>();

// on click reset handler
const emits = defineEmits(['reset']);

// get the icon class based on font awesome. @param: campaign.platforms
const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'Meta':
      return 'fab fa-facebook';
    case 'Google':
      return 'fab fa-google';
    case 'TikTok':
      return 'fab fa-tiktok';
    default:
      return '';
  }
};
</script>

<!--  using scoped because the styles are specific to this component -->
<style scoped>
/* Style for the return button */
.return-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #FBF3D5 ;
  color: #713737 ;
  border-color: #EFBC9B;
}

/* Dark mode style for the return button */
.dark-mode .return-button {
  background-color: #333333 ;
  color: #ffffff ;
  border-color: #555555;
}
</style>
