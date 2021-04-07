import { getRandomInt } from "./helpers";
import nouns from "../constants/nouns";
import verbs from "../constants/verbs";
import logs from "../constants/logs";

export default class Go {
  static getRandomFunctionName() {
    const randomNoun = nouns[getRandomInt(0, nouns.length - 1)];
    const randomVerb = verbs[getRandomInt(0, verbs.length - 1)];
    return `${randomVerb}${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["const", "var"];
    const types = ["int", "bool", "string"];
    const values = ["[]", "this", `${Math.floor(Math.random() * 100)}`];

    const keyword = keyWords[Math.floor(Math.random() * keyWords.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    let varName = nouns[Math.floor(Math.random() * nouns.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    
    if(keyword === "const") 
    {
      varName = varName.toUpperCase();
    }
    return `${keyword} ${varName} ${type} = ${value}\n`;
  }

  static getRandomfmtPrintln() {
    let msg = `${logs[Math.floor(Math.random() * logs.length)]}`;
    return `fmt.Println(${msg})`
  }

  static getRandomFillerLine() {
    const options = [
      Go.getRandomfmtPrintln(),
      Go.getRandomVariableDeclaration(),
      `${Go.getRandomFunctionName()}()`,
    ];
    return `\t${options[Math.floor(Math.random() * options.length)]}`;
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
    return nouns[Math.floor(Math.random() * nouns.length)];
  }

  static getExistingVariable() {
    return `null`;
  }
}
