const AndroidIcon = ({ size, color } = { size: 200, color: '#FFFFFF' }) => (
<svg 
xmlns="http://www.w3.org/2000/svg" 
width={size}
height={size} 
viewBox="0 0 24 24">
  <path 
    d="M6 8l.001 9.444c0 .861.696 1.556 1.557 1.556h.442v3.542c0 .804.707 1.458 1.51 1.458.806 0 1.49-.654 1.49-1.459v-3.541h2v3.542c0 .804.707 1.458 1.511 1.458.806 0 1.489-.654 1.489-1.459v-3.541l.444-.001c.858 0 1.556-.696 1.556-1.557v-9.442h-12zm16 1.471c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm-17 0c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm9.951-7.312l.94-1.859c.068-.132-.019-.3-.163-.3-.066 0-.13.038-.164.105l-.949 1.878c-1.531-.737-3.544-.812-5.229 0l-.95-1.878c-.033-.067-.097-.105-.164-.105-.144 0-.231.168-.163.3l.94 1.859c-1.845 1.034-3.049 2.584-3.049 4.84h12c0-2.256-1.204-3.806-3.049-4.84zm-5.45 2.841c-.276 0-.501-.224-.501-.5 0-.274.225-.5.501-.5s.499.226.499.5c0 .276-.223.5-.499.5zm4.998 0c-.276 0-.499-.224-.499-.5 0-.274.223-.5.499-.5s.501.226.501.5c0 .276-.225.5-.501.5z"
    fill={color}
  />
</svg>
)
export default AndroidIcon
