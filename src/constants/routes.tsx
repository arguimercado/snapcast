const ROUTE = {
   HOME: '/',
   PROFILE: '/profile',
   VIDEO: (videoId: string) => `/video/${videoId}`,
   UPLOAD: '/upload',
}

export default ROUTE;