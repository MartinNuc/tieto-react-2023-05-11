import { PropsWithChildren } from "react"

export const Content = ({ children }: PropsWithChildren) => {
  return <div style={{ 
    background: 'white',
    position: 'absolute',
    border: '1px solid black',
    margin: '5px' }}>
    {children}
  </div>
}