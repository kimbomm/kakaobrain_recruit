export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {})

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code) {
      redirect('/error')
    }
  })
}
