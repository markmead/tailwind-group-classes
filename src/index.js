export default function () {
  let twcgRefs = [...document.querySelectorAll('[tw-group]')]

  twcgRefs.forEach((twcgRef) => {
    let modifierAttrs = [...twcgRef.attributes].filter((elAttr) =>
      elAttr.name.includes('tw-group.')
    )

    modifierAttrs.forEach((modAttr) => {
      let twValues = modAttr.value.split(' ')

      twValues.forEach((twVal) => {
        twcgRef.classList.add(twVal)
      })
    })
  })
}
