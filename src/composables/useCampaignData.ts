import { ref, onMounted } from 'vue';

// define the structure for metrics data
interface Metrics {
  impressions: number;
  clicks: number;
  applications: number;
  costPerImpression: number;
  costPerClick: number;
  costPerApplication: number;
}

// define the structure for platform
interface Platform {
  name: string;
  metrics: Metrics;
}

// define the structure for campaign
interface Campaign {
  vacancy: string;
  location: string;
  platforms: Platform[];
}

// manage campaign data
export function useCampaignData() {
  const campaigns = ref<Campaign[]>([]);  
  const selectedVacancy = ref<string | null>(null);
  const selectedCampaign = ref<Campaign | null>(null);
  const isDarkMode = ref(false);

  // update selectedCampaign based on selectedVacancy
  const displayData = () => {
    selectedCampaign.value = campaigns.value.find(campaign => campaign.vacancy === selectedVacancy.value) || null;
  };

  // reset the selection of vacancy and campaign
  const resetSelection = () => {
    selectedVacancy.value = null;
    selectedCampaign.value = null;
  };

  // get the appropriate icon class for a platform
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

  // toggle dark mode
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark-mode', isDarkMode.value); // apply dark mode 
  };

  // fetch campaign data when the component is mounted
  onMounted(async () => {
    try {
      const response = await fetch('/campaigns.json');

      // error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      campaigns.value = data.campaigns;
    } catch (error) {
      console.error('failed to load campaigns:', error);
    }
  });

  // return reactive variables and functions
  return {
    campaigns,
    selectedVacancy,
    selectedCampaign,
    isDarkMode,
    displayData,
    resetSelection,
    getPlatformIcon,
    toggleDarkMode
  };
}
