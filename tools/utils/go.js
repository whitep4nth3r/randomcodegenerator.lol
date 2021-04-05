import { getRandomInt, getLogLines } from "./helpers";
import { nouns, verbs, singleCharacters } from "./words";


export default class Go {
  static getRandomFunctionName() {
    const randomNoun = nouns[getRandomInt(0, nouns.length - 1)];
    const randomVerb = verbs[getRandomInt(0, verbs.length - 1)];
    return `${randomVerb}${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["const", "var"];
    const types = [];
    const options = ["[]", "this", `${Math.floor(Math.random() * 100)}`];

    return `${keyWords[Math.floor(Math.random() * keyWords.length)]} ${
      nouns[Math.floor(Math.random() * nouns.length)]
    } = ${options[Math.floor(Math.random() * options.length)]};`;
  }

  static getRandomfmtPrintln() {
    const options = getLogLines();

    let msg = `${options[Math.floor(Math.random() * options.length)]}`;
    return `fmt.Println(${msg});`
  }

  static getRandomFillerLine() {
    const options = [
      Go.getRandomfmtPrintln(),
      Go.getRandomVariableDeclaration(),
      `${Go.getRandomFunctionName()}();`,
    ];
    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomImportName() {
    // Actual list of standard library packages, as documented here: https://golang.org/pkg/
    const imports = ["archive/tar", "archive/zip", 
      "bufio", 
      "builtin", 
      "bytes", 
      "cmd/addr2line", "cmd/api", "cmd/asm", "cmd/buildid", "cmd/cgo", "cmd/compile", "cmd/cover", "cmd/dist", "cmd/foc", "cmd/fix", "cmd/go", "cmd/go", "cmd/gofmt", "cmd/link", "cmd/nm", "cmd/objdump", "cmd/pack", "cmd/pprof", "cmd/test2json", "cmd/trace", "cmd/vet", 
      "compress/", "compress/", "compress/", "compress/", "compress/", 
      "container/heap", "container/list", "container/ring", 
      "context", 
      "crypto", "crypto/aes", "crypto/cipher", "crypto/des", "crypto/dsa", "crypto/ecdsa", "crypto/ed25519", "crypto/elliptic", "crypto/hmac", "crypto/md5", "crypto/rand", "crypto/rc4", "crypto/rsa", "crypto/sha1", "crypto/sha256", "crypto/sha512", "crypto/subtle", "crypto/tls", "crypto/x509", "crypto/x509/pkix",  
      "database/sql", "database/sql/driver", 
      "debug/dwarf", "debug/elf", "debug/gosym", "debug/macho", "debug/pe", "debug/plan9obj",
      "embed",
      "encoding", "encoding/ascii85", "encoding/asn1", "encoding/base32", "encoding/base64", "encoding/binary", "encoding/csv", "encoding/gob", "encoding/hex", "encoding/json", "encoding/pem", "encoding/xml", 
      "errors", 
      "expvar", 
      "flag", 
      "fmt", 
      "go/ast", "go/build", "go/build/constant", "go/constant", "go/doc", "go/format", "go/importer", "go/parser", "go/printer", "go/scanner", "go/token", "go/types", 
      "hash", "hash/", "hash/", "hash/", "hash/", "hash/maphash", 
      "html", "html/template",
      "image", "image/color", "image/color/palette", "image/draw", "image/gif", "image/jpeg", "image/ong", 
      "index/suffixarray",
      "io", "io/fs", "io/ioutil",
      "log", "log/syslog",
      "math", "math/big", "math/bits", "math/complx", "math/rand", 
      "mime", "mime/multipart", "mime/quotedprintable", 
      "net", "net/http", "net/http/cgi", "net/http/cookiejar", "net/http/fcgi", "net/http/httptest", "net/http/httptrace", "net/http/httputil", "net/http/pprof", "net/mail", "net/rpc", "net/rpc/jsonrpc", "net/smtp", "net/textproto", "net/url", 
      "os", "os/exec", "os/signal", "os/user",
      "path", "path/filepath", 
      "plugin",
      "reflect",
      "regexp", "regexp/syntax", 
      "runtime", "runtime/cgo", "runtime/debug", "runtime/metrics", "runtime/msan", "runtime/pprof", "runtime/race", "runtime/trace", 
      "sort",
      "strconv",
      "strings",
      "sync", "sync/atomic", 
      "syscall", "syscall/js",
      "testing", "testing/fstest", "testing/iotest", "testing/quick", 
      "text", "text/scanner", "text/tabwriter", "text/template", "text/template/parse", 
      "time", "time/tzdata",
      "unicode", "unicode/utf16", "unicode/utf8", 
      "unsafe"
    ];
    return imports[Math.floor(Math.random() * imports.length)];
  }

  static getRandomPackageName() {
    const packages = ["main"];
    return packages[Math.floor(Math.random() * packages.length)];
  }

  // ༼ つ ◕_◕ ༽つ gib code plz!
  static gimmeCode(lines) {
    const fillerLineQty = parseInt(lines, 10) - 2;
    let randomImports = [];
    let fillerLines = [];

    //package name is mandatory, so let's always have this, and exclude it from the line count
    const pkgLine = `package ${Go.getRandomPackageName()}\n\n\r`;
    
    const importsToGet = getRandomInt(1,3);

    for (let i = 0; i <= importsToGet; i++) {
      randomImports.push(`\t\t"${Go.getRandomImportName()}"\n\r`);
    }

    const importLine = `import (\n\r\t\t"fmt"\n${randomImports.join("")})\n\n\r`;
    
    // create a function
    const firstLine = `func ${Go.getRandomFunctionName()} { \n\r`;

    //add coe to function - if there'sre enough lines, 
    for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${Go.getRandomFillerLine()}`);
    }

    let lastLine = `\n\r}`;

    return pkgLine + importLine + firstLine + fillerLines.join("\n\r") + lastLine;
  }
}
