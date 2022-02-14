export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url, config)
    // if (config.url === '/media/image') {
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Access-Control-Allow-Credentials'] = true
    // 'https://api.recruiter.co.kr'
    // }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code) {
      redirect('/error')
    }
  })
}
