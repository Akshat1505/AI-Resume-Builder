import React, { act, useState } from 'react'
import Detail from './forms/Detail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'

function FormSection() {

  const [active,setActive] = useState(1);
  const [enableNext,setEnableNext] = useState(false);
  return (
    <div>
      <div className='flex justify-around'>
        <Button className="flex gap-2" size="sm" variant="outline"><LayoutGrid/>Theme</Button>
        <div className='flex gap-2'>
          {active>1&&<Button size="sm" onClick={()=>setActive(active-1)} className=""><ArrowLeft/></Button>}
          <Button disabled={!enableNext} className="flex gap-2" size="sm" onClick={()=>setActive(active+1)}>Next<ArrowRight/></Button>
        </div>
      </div>
      {/* Personal Detail */}
      {active==1? <Detail enableNext={(v)=>setEnableNext(v)}/>:null}
      {/* Summary */}

      {/* Exp */}

      {/* Edu */}

      {/* SKills */}
    </div>
  )
}

export default FormSection