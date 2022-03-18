import Vue from 'vue'

function setParameters(payload) {
  let createdParam = ''
  let i = ''
  for (const key in payload) {
    const value = payload[key]
    createdParam += `${key}=${value}`
    i++
    if (i !== Object.keys(payload).length) {
      createdParam += '&'
    }
  }
  return createdParam
}

export default {
  setParameters
}
