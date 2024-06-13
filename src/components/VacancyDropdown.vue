<template>
  <div class="dropdown-box">

    <!-- label for the vacancy selection dropdown -->
    <label class="form-label">select vacancy:</label>

    <!-- dropdown for selecting a vacancy, bound to localSelectedVacancy and triggers emitChange on change -->
    <select v-model="localSelectedVacancy" @change="emitChange" class="form-select">
      
      <!-- disabled option -->
      <option value="" disabled>select a vacancy</option>
      
      <!-- loop through campaigns to generate dropdown options -->
      <option v-for="campaign in campaigns" :key="campaign.vacancy" :value="campaign.vacancy">
        {{ campaign.vacancy }}
      </option>
    
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue';

// interface for campaign structure
interface Campaign {
  vacancy: string;
  location: string;
  platforms: { 
    name: string; 
    metrics: { 
      impressions: number; 
      clicks: number; 
      applications: number; 
      costPerImpression: number; 
      costPerClick: number; 
      costPerApplication: number; 
    }; 
  }[];
}

// define props received from parent component
const props = defineProps<{
  campaigns: Campaign[];
  selectedVacancy: string | null;
}>();

// define custom events that can be emitted to parent component
const emits = defineEmits(['update:selectedVacancy', 'change']);

// local state to manage selected vacancy, initialized with prop value
const localSelectedVacancy = ref(props.selectedVacancy);

// watch for changes in selectedVacancy prop and update local state accordingly
watch(() => props.selectedVacancy, (newVal) => {
  localSelectedVacancy.value = newVal;
});

// emit on change
const emitChange = () => {
  emits('update:selectedVacancy', localSelectedVacancy.value);
  emits('change');
};
</script>

<!-- styles scoped to the component -->
<style scoped>
.dropdown-box {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #f8f9fa;
}
</style>
