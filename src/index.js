export default function () {
  let twcgRefs = [...document.querySelectorAll("[tw-group]")];

  twcgRefs.forEach((twcgRef) => {
    let modifierAttrs = [...twcgRef.attributes].filter((elAttr) =>
      elAttr.name.includes("tw-group.")
    );

    modifierAttrs.forEach((modAttr) => {
      let twModifiers = modAttr.name
        .split(".")
        .filter((modName) => modName !== "tw-group");

      let twValues = modAttr.value.split(" ");

      twValues.forEach((twVal) => {
        twModifiers.forEach((twMod) =>
          twcgRef.classList.add(`${twMod}:${twVal}`)
        );
      });
    });
  });
}
