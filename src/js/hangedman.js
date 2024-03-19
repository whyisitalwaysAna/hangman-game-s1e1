const helperWrapper = document.querySelector('.helper-2')

const head = document.createElement('div')
head.classList.add('head')
//helperWrapper.appendChild(head) //will be deleted

const torso = document.createElement('div')
torso.classList.add('torso')
//helperWrapper.appendChild(torso) //will be deleted

const leftHand = document.createElement('div')
leftHand.classList.add('left-hand')
//torso.appendChild(leftHand) //will be deleted

const rightHand = document.createElement('div')
rightHand.classList.add('right-hand')
//torso.appendChild(rightHand) //will be deleted

const leftLeg = document.createElement('div')
leftLeg.classList.add('left-leg')
//torso.appendChild(leftLeg) //will be deleted

const rightLeg = document.createElement('div')
rightLeg.classList.add('right-leg')
//torso.appendChild(rightLeg) //will be deleted
