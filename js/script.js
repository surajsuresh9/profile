const toolTipLinks = document.querySelectorAll('.social a');

for (let i = 0; i < toolTipLinks.length; i++) {
    toolTipLinks[i].addEventListener('mouseover', () => {
        const parent = toolTipLinks[i];
        // console.log(parent);
        parent.children[1].style.display = 'inline';
    });
    toolTipLinks[i].addEventListener('mouseout', () => {
        const parent = toolTipLinks[i];
        // console.log(parent);
        parent.children[1].style.display = 'none';
    });
}