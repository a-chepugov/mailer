const api = {
	authentication: {
		login: {
			path: "/api/2/auth/{username}/login.json",
			method: 'POST'
		},
		logout: {
			path: "/api/2/auth/{username}/logout.json",
			method: 'POST'
		}
	},
	settings: {
		saveSettings: {
			path: "/api/2/settings/(username)/(scope).json",
			method: 'POST'
		},
		getSettings: {
			path: "/api/2/settings/(username)/(scope).json",
			method: 'GET'
		}
	},
	podcastLists: {
		createPodcastList: {
			path: "/api/2/lists/(username)/create.json",
			method: 'POST'
		},
		getUsersLists: {
			path: "/api/2/lists/(username).json",
			method: 'GET'
		},
		getPodcastList: {
			path: "/api/2/lists/(username)/list/(listname).json",
			method: 'GET'
		},
		updatePodcastList: {
			path: "/api/2/lists/(username)/list/(listname).json",
			method: 'PUT'
		},
		deletePodcastList: {
			path: "/api/2/lists/(username)/list/(listname).json",
			method: 'DELETE'
		}
	},
	episode: {
		uploadEpisodeActions: {
			path: "/api/2/episodes/(username).json",
			method: 'POST'
		},
		getEpisodeActions: {
			path: "/api/2/episodes/(username).json",
			method: 'POST'
		}
	},
	subscriptions: {
		getSubscriptionsOfDevice: {
			path: "/subscriptions/(username)/(deviceid).json",
			method: 'GET'
		},
		getAllSubscriptions: {
			path: "/subscriptions/(username).json",
			method: 'GET'
		},
		uploadSubscriptionsOfDevice: {
			path: "/subscriptions/(username)/(deviceid).json",
			method: 'PUT'
		},
		uploadSubscriptionChanges: {
			path: "/api/2/subscriptions/(username)/(deviceid).json",
			method: 'POST'
		},
		getSubscriptionChanges: {
			path: "/api/2/subscriptions/(username)/(deviceid).json",
			method: 'GET'
		}
	},
	device: {
		updateDeviceData: {
			path: "/api/2/devices/(username)/(deviceid).json",
			method: 'POST'
		},
		getListDevices: {
			path: "/api/2/devices/(username).json",
			method: 'POST'
		},
		getDeviceUpdates: {
			path: "/api/2/updates/(username)/(deviceid).json",
			method: 'GET'
		}
	},
	suggestions: {
		getSuggestedPodcasts: {
			path: '/suggestions/(number).json',
			method: 'GET'
		}
	},
	directory: {
		getTopTags: {
			path: '/api/2/tags/(count).json',
			method: 'GET'
		},
		getPodcastsforTags: {
			path: '/api/2/tag/(tag)/(count).json',
			method: 'GET'
		},
		getPodcastData: {
			path: '/api/2/data/podcast.json',
			method: 'GET'
		},
		getEpisodeData: {
			path: '/api/2/data/episode.json',
			method: 'GET'
		},
		getPodcastToplist: {
			path: '/toplist/(number).json',
			method: 'GET'
		},
		searchPodcast: {
			path: '/search.json',
			method: 'GET'
		}
	},
	deviceSynchronization: {
		getDeviceSyncStatus: {
			path: '/api/2/sync-devices/(username).json',
			method: 'GET'
		},
		setDeviceSyncStatus: {
			path: '/api/2/sync-devices/(username).json',
			method: 'POST'
		},
		getFavoriteEpisodes: {
			path: '/api/2/favorites/(username).json',
			method: 'GET'
		}
	},
	clientParametrization: {
		path: "/clientconfig.json",
		method: 'GET'
	}
};

export default api;
