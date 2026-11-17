/** Small ribbon ornaments in the portfolio's thread palette. */
export default function StitchTrim({ variant = 'hearts', className = '' }: { variant?: 'hearts' | 'stars' | 'bow'; className?: string }) {
  return <svg className={`stitch-trim ${className}`} viewBox="0 0 300 110" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {variant === 'bow' ? <>
        <path d="M146 44C125 25 102 8 91 22C77 40 104 62 144 49M154 44C174 22 197 9 208 23C220 42 192 63 156 49" fill="currentColor" fillOpacity=".09" />
        <path d="M144 50C136 62 132 79 113 91L127 88L130 100C144 85 142 67 149 53M156 50C164 65 159 87 182 100L178 86L193 91C174 74 170 59 157 49" fill="currentColor" fillOpacity=".09" />
        <path d="M144 42Q150 38 157 43L157 52Q151 57 144 52Z" fill="currentColor" fillOpacity=".2" />
        <path d="M99 27Q112 27 135 43M201 28Q186 28 165 44M147 57Q139 78 133 87M160 60Q166 81 174 86" strokeWidth=".8" opacity=".65" />
        <path d="M64 31Q59 39 65 47M235 46Q242 37 237 31" strokeDasharray="1 4" />
      </> : variant === 'hearts' ? <>
        <path d="M150 84C134 71 111 54 119 37C125 23 142 29 150 40C160 25 177 26 183 39C191 58 167 74 150 84Z" fill="currentColor" fillOpacity=".08" />
        <path d="M127 39Q123 46 128 53M151 90Q156 89 159 85" strokeWidth="1" />
        <path d="M75 57C65 48 56 40 61 34C66 29 72 32 75 36C80 29 87 30 90 36C94 44 83 52 75 57ZM224 71C214 62 205 54 210 48C215 43 221 46 224 50C229 43 236 44 239 50C243 58 232 66 224 71Z" strokeWidth="1.2" />
        <path d="M96 61Q103 68 109 65M189 70Q197 77 205 73" strokeDasharray="1 5" />
      </> : <>
        <path d="M150 21Q153 48 171 54Q153 58 150 86Q147 59 129 54Q147 49 150 21Z" fill="currentColor" fillOpacity=".12" />
        <path d="M104 40Q106 50 114 52Q106 54 104 64Q102 54 94 52Q102 50 104 40ZM198 59Q200 69 208 71Q200 73 198 83Q196 73 188 71Q196 69 198 59Z" strokeWidth="1.2" />
      </>}
      <path d="M42 72l3 3m0-3l-3 3M254 29l3 3m0-3l-3 3" strokeWidth="1.2" />
    </g>
  </svg>;
}
