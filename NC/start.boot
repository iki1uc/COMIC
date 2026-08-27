BOOT.VERSION      = 1.0
BOOT.TYPE         = minimal-loader
BOOT.ARCH         = x86-real-mode
BOOT.SIZE         = 512b
BOOT.ENTRY        = 0x7C00

INIT.CPU          = real-mode
INIT.MEM          = BIOS.413h.detect
INIT.STACK        = 0x9000

INIT.DISK         = BIOS.INT13
INIT.VIDEO        = BIOS.INT10.03h

IO.READ.SECTOR    = BIOS.INT13.read
IO.TIMER          = BIOS.INT1A
IO.SYNC           = arg.sync

KERNEL.PATH       = /boot/kernel.bin
KERNEL.LBA        = 1
KERNEL.SIZE       = 32KB
KERNEL.ENTRY      = 0x1000
KERNEL.MAP        = flat

BOOT.LOG          = "BOOT START"
BOOT.ERROR        = "BOOT FAIL"
BOOT.OK           = "BOOT OK"

CHECKSUM.MODE     = CRC16
CHECKSUM.KERNEL   = verify(KERNEL.PATH)
CHECKSUM.FAIL     = halt("CRC ERROR")

RELOC.ADDR        = 0x1000
RELOC.MODE        = linear

EXEC.LOAD         = load(KERNEL.PATH)
EXEC.JUMP         = KERNEL.ENTRY

STATE.BOOT        = COMPLETE
