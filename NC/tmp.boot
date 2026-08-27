BOOT.VERSION      = 1.0
BOOT.ENTRY        = 0x7C00

INIT.CPU          = real
INIT.MEM          = detect
INIT.STACK        = 0x9000

INIT.DISK         = INT.13
INIT.VIDEO        = INT.10.03h

IO.READ           = INT.13
IO.TIMER          = INT.1A
IO.SYNC           = arg.sync

KERNEL.PATH       = /boot/kernel.bin
KERNEL.LBA        = 1
KERNEL.SIZE       = 32KB
KERNEL.ENTRY      = 0x1000

BOOT.LOG          = "BOOT START"
CRC.MODE          = CRC16

RELOC.ADDR        = 0x1000

EXEC.JUMP         = KERNEL.ENTRY
