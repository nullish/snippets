Attribute VB_Name = "modRegEx"
Public Function fnRegExExtract(strString As String, strPattern As String) As String

'Receives string and regex pattern and returns extracted string.

Dim rx
Dim strOut As String

Set rx = New RegExp
With rx
    .IgnoreCase = True
    .Global = True
    .Pattern = strPattern
End With

If rx.Test(strString) Then
    strOut = rx.Execute(strString)(0)
Else
    strOut = strString
End If

fnRegExExtract = strOut

End Function

