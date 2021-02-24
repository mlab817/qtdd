const slugify = (value) => {
  if (!value) {
    return ''
  }

  return value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export default slugify
