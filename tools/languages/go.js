import { Helpers } from "../utils";

export default class Go {
  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["const", "var"];
    const types = ["int", "bool", "string"];
    const values = ["[]", "this", `${Helpers.getRandomInt(0, 100)}`];

    const keyword = Helpers.getRandomEntry(keyWords);
    const type = Helpers.getRandomEntry(types);
    let varName = Helpers.getRandomNoun();
    const value = Helpers.getRandomEntry(values);

    if (keyword === "const") {
      varName = Helpers.getRandomNounUpperCase();
    }
  }

  static getRandomfmtPrintln() {
    let msg = Helpers.getRandomLogLine();
    return `fmt.Println(${msg})`;
  }

  static getRandomFillerLine() {
    const options = [
      Go.getRandomfmtPrintln(),
      Go.getRandomVariableDeclaration(),
      `${Go.getRandomFunctionName()}()`,
    ];
    return `${Helpers.getIndentation({ type: "tab" })}${Helpers.getRandomEntry(
      options
    )}`;
  }

  static getRandomImportName() {
    // Actual list of standard library packages, as documented here: https://golang.org/pkg/
    const imports = [
      "archive/tar",
      "archive/zip",
      "bufio",
      "builtin",
      "bytes",
      "cmd/addr2line",
      "cmd/api",
      "cmd/asm",
      "cmd/buildid",
      "cmd/cgo",
      "cmd/compile",
      "cmd/cover",
      "cmd/dist",
      "cmd/foc",
      "cmd/fix",
      "cmd/go",
      "cmd/go",
      "cmd/gofmt",
      "cmd/link",
      "cmd/nm",
      "cmd/objdump",
      "cmd/pack",
      "cmd/pprof",
      "cmd/test2json",
      "cmd/trace",
      "cmd/vet",
      "compress/",
      "compress/",
      "compress/",
      "compress/",
      "compress/",
      "container/heap",
      "container/list",
      "container/ring",
      "context",
      "crypto",
      "crypto/aes",
      "crypto/cipher",
      "crypto/des",
      "crypto/dsa",
      "crypto/ecdsa",
      "crypto/ed25519",
      "crypto/elliptic",
      "crypto/hmac",
      "crypto/md5",
      "crypto/rand",
      "crypto/rc4",
      "crypto/rsa",
      "crypto/sha1",
      "crypto/sha256",
      "crypto/sha512",
      "crypto/subtle",
      "crypto/tls",
      "crypto/x509",
      "crypto/x509/pkix",
      "database/sql",
      "database/sql/driver",
      "debug/dwarf",
      "debug/elf",
      "debug/gosym",
      "debug/macho",
      "debug/pe",
      "debug/plan9obj",
      "embed",
      "encoding",
      "encoding/ascii85",
      "encoding/asn1",
      "encoding/base32",
      "encoding/base64",
      "encoding/binary",
      "encoding/csv",
      "encoding/gob",
      "encoding/hex",
      "encoding/json",
      "encoding/pem",
      "encoding/xml",
      "errors",
      "expvar",
      "flag",
      "fmt",
      "go/ast",
      "go/build",
      "go/build/constant",
      "go/constant",
      "go/doc",
      "go/format",
      "go/importer",
      "go/parser",
      "go/printer",
      "go/scanner",
      "go/token",
      "go/types",
      "hash",
      "hash/",
      "hash/",
      "hash/",
      "hash/",
      "hash/maphash",
      "html",
      "html/template",
      "image",
      "image/color",
      "image/color/palette",
      "image/draw",
      "image/gif",
      "image/jpeg",
      "image/ong",
      "index/suffixarray",
      "io",
      "io/fs",
      "io/ioutil",
      "log",
      "log/syslog",
      "math",
      "math/big",
      "math/bits",
      "math/complx",
      "math/rand",
      "mime",
      "mime/multipart",
      "mime/quotedprintable",
      "net",
      "net/http",
      "net/http/cgi",
      "net/http/cookiejar",
      "net/http/fcgi",
      "net/http/httptest",
      "net/http/httptrace",
      "net/http/httputil",
      "net/http/pprof",
      "net/mail",
      "net/rpc",
      "net/rpc/jsonrpc",
      "net/smtp",
      "net/textproto",
      "net/url",
      "os",
      "os/exec",
      "os/signal",
      "os/user",
      "path",
      "path/filepath",
      "plugin",
      "reflect",
      "regexp",
      "regexp/syntax",
      "runtime",
      "runtime/cgo",
      "runtime/debug",
      "runtime/metrics",
      "runtime/msan",
      "runtime/pprof",
      "runtime/race",
      "runtime/trace",
      "sort",
      "strconv",
      "strings",
      "sync",
      "sync/atomic",
      "syscall",
      "syscall/js",
      "testing",
      "testing/fstest",
      "testing/iotest",
      "testing/quick",
      "text",
      "text/scanner",
      "text/tabwriter",
      "text/template",
      "text/template/parse",
      "time",
      "time/tzdata",
      "unicode",
      "unicode/utf16",
      "unicode/utf8",
      "unsafe",
    ];
    return Helpers.getRandomEntry(imports);
  }

  static getRandomPackageName() {
    return Helpers.getRandomNoun();
  }

  static getExistingVariable() {
    return `null`;
  }

  static generateRandomCode(lines, addComment) {
    // get a random amount of package imports.
    const importsToGet = Math.floor(lines / 5);
    // coin flip for adding a return statement or not
    const addReturnLine = Math.floor(Math.random() * 2);
    let fillerLineQty =
      parseInt(lines, 10) - 2 - 2 - importsToGet - addReturnLine;
    let randomImports = [];
    let lastLine;

    //package name is mandatory, so let's always have this, and exclude it from the line count
    const pkgLine = `package ${Go.getRandomPackageName()}${Helpers.addNewLine(
      2
    )}`;

    //set up random package import[s]
    let importLine = "";
    if (importsToGet >= 1) {
      for (let i = 1; i <= importsToGet; i++) {
        randomImports.push(
          `${Helpers.getIndentation({
            type: "tab",
          })}"${Go.getRandomImportName()}"${Helpers.addNewLine()}`
        );
      }
      importLine = `import (${Helpers.addNewLine()}${Helpers.getIndentation({
        type: "tab",
      })}\"fmt"${Helpers.addNewLine()}${randomImports.join(
        ""
      )})${Helpers.addNewLine(2)}`;
    } else {
      importLine = `import "fmt"${Helpers.addNewLine(2)}`;
    }

    //set up a function
    const firstLine = `func ${Go.getRandomFunctionName()} { ${Helpers.addNewLine()}`;
    //add code to function
    const fillerLines = Array(fillerLineQty < 1 ? 1 : fillerLineQty)
      .fill()
      .map((l) => Go.getRandomFillerLine());

    if (addReturnLine === 1) {
      lastLine = `${Helpers.addNewLine()}${Helpers.getIndentation({
        type: "tab",
      })}return ${Go.getExistingVariable()}`;
    }

    lastLine += `${Helpers.addNewLine()}}`;

    return (
      pkgLine +
      importLine +
      firstLine +
      fillerLines.join(Helpers.addNewLine()) +
      lastLine
    );
  }
}
