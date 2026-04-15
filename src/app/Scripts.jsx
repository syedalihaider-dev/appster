"use client"
import { useEffect } from "react"

const Scripts = () => {
  //   Chat Replace Function
  const replaceChat = () => {
    console.log("Replace When Chat Change")
  }

  useEffect(() => {
    window.replaceChat = replaceChat

    return () => {
      delete window.replaceChat
    }
  }, [])
  //   Chat Replace Function

  return null
}
export default Scripts
